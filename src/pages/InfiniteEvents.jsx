import React, { useEffect, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

// --- MOCK API FUNCTION ---
// In real life, this fetches from your backend like `/api/events?cursor=10`
const fetchEventsChunk = async ({ pageParam = 0 }) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const chunkSize = 12; // How many items per load
  
  // Generate dummy data for this chunk
  const newItems = Array.from({ length: chunkSize }).map((_, i) => {
    const id = pageParam * chunkSize + i;
    return {
      id: id,
      title: `Event Number ${id + 1}`,
      category: id % 2 === 0 ? "Cultural" : "Tech",
      description: `This is the description for event ${id + 1}. It is loaded dynamically.`,
    };
  });

  // Simulate end of data after 5 pages (approx 60 items)
  const hasNextPage = pageParam < 4; 

  return {
    data: newItems,
    nextCursor: hasNextPage ? pageParam + 1 : undefined,
  };
};


const EventCard = ({ event }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="h-64 bg-rich-black/90 rounded-xl border border-gold/30 p-6 flex flex-col justify-center text-center"
  >
    <h3 className="font-serif text-xl font-bold text-gold mb-2">{event.title}</h3>
    <span className="px-3 py-1 text-xs border border-gold/50 text-gold/70 rounded-full uppercase w-fit mx-auto mb-4">{event.category}</span>
    <p className="text-white/80 text-sm line-clamp-3">{event.description}</p>
  </motion.div>
);

const InfiniteEvents = () => {
  const loadMoreRef = useRef();

  // 1. The TanStack Query Hook handles the complex pagination state
  const {
    data, // Contains an array of "pages"
    fetchNextPage, // Function to trigger next load
    hasNextPage, // Boolean: is there more data on server?
    isFetchingNextPage, // Boolean: are we currently loading more?
    status, // loading, error, success
  } = useInfiniteQuery({
    queryKey: ['eventsInfinite'],
    queryFn: fetchEventsChunk,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });


  // 2. Intersection Observer Setup
  useEffect(() => {
      const observer = new IntersectionObserver(
          (entries) => {
              // If the "loadMoreRef" div is visible AND we have more pages AND we aren't already loading
              if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
                  fetchNextPage();
              }
          },
          { rootMargin: "200px" } // Trigger 200px before hitting the actual bottom for smoothness
      );

      if (loadMoreRef.current) {
          observer.observe(loadMoreRef.current);
      }

      return () => {
          if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
      }
  }, [loadMoreRef, hasNextPage, isFetchingNextPage, fetchNextPage]);


  // --- Render States ---

  if (status === 'loading') return <div className="min-h-screen flex items-center justify-center text-gold"><Loader2 className="animate-spin" size={40}/></div>;
  if (status === 'error') return <div className="min-h-screen flex items-center justify-center text-red-500">Error loading data.</div>;


  return (
    <div className="py-16 px-4 min-h-screen bg-rich-black">
      <h1 className="font-serif text-4xl md:text-5xl font-extrabold mb-12 text-center text-gold">
        Infinite Events
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* 3. Flatten the pages of data into one list */}
        {data.pages.map((page) => (
            <React.Fragment key={page.nextCursor || 'last'}>
                {page.data.map((event) => (
                <EventCard key={event.id} event={event} />
                ))}
            </React.Fragment>
        ))}
      </div>

      {/* 4. The Invisible Sentinel / Loading Indicator at the bottom */}
      <div 
        ref={loadMoreRef} 
        className="h-20 flex items-center justify-center mt-8"
      >
        {isFetchingNextPage ? (
             <Loader2 className="animate-spin text-gold" size={30}/>
        ) : hasNextPage ? (
            <span className="text-gold/50 text-sm">Scroll for more...</span>
        ) : (
            <span className="text-gold font-medium">You have reached the end!</span>
        )}
      </div>
    </div>
  );
};

export default InfiniteEvents;