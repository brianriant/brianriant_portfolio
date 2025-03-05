export default function LoadingSkeleton() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 animate-pulse">
      <div className="h-6 w-24 bg-gray-200 rounded mb-8" ></div> 
      
      <div className="space-y-8">
        <div className="h-64 bg-gray-200 rounded-lg" ></div> 
        
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 w-32 rounded" ></div> 
          <div className="h-8 bg-gray-200 w-3/4 rounded" ></div> 
          <div className="h-6 bg-gray-200 w-1/2 rounded" ></div> 
        </div>
        
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded" ></div> 
          <div className="h-4 bg-gray-200 rounded" ></div> 
          <div className="h-4 bg-gray-200 w-5/6 rounded"></div> 
        </div>
      </div>
    </div>
  );
}