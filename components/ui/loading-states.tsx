import { Skeleton } from './skeleton';

// Simple Loading Spinner
export function LoadingSpinner({ size = 'md', text = 'Loading...' }: { size?: 'sm' | 'md' | 'lg'; text?: string }) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className={`inline-block animate-spin rounded-full border-b-2 border-blue-600 ${sizeClasses[size]}`}></div>
      {text && <p className="mt-2 text-gray-600 text-sm">{text}</p>}
    </div>
  );
}

// Page Loading State
export function PageLoadingState() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto py-6 md:py-8 px-4 md:px-6">
        <LoadingSpinner size="lg" text="Loading page..." />
      </div>
    </div>
  );
}

// Content Loading State
export function ContentLoadingState({ message = 'Loading content...' }: { message?: string }) {
  return (
    <div className="text-center py-12">
      <LoadingSpinner size="md" text={message} />
    </div>
  );
}

// Error State
export function ErrorState({ 
  title = 'Something went wrong', 
  message = 'An error occurred while loading the content.',
  onRetry 
}: { 
  title?: string; 
  message?: string; 
  onRetry?: () => void;
}) {
  return (
    <div className="text-center py-12">
      <div className="bg-red-100 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4">
        <span className="text-red-600 text-xl md:text-2xl">⚠️</span>
      </div>
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-6 text-sm md:text-base">{message}</p>
      {onRetry && (
        <button 
          onClick={onRetry}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base"
        >
          Try Again
        </button>
      )}
    </div>
  );
}

// Empty State
export function EmptyState({ 
  title = 'No content found', 
  message = 'There are no items to display at the moment.',
  icon = '📭'
}: { 
  title?: string; 
  message?: string; 
  icon?: string;
}) {
  return (
    <div className="text-center py-12">
      <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
        <span className="text-gray-400 text-xl">{icon}</span>
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base">{message}</p>
    </div>
  );
}

// Inline Loading
export function InlineLoading({ size = 'sm' }: { size?: 'sm' | 'md' }) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6'
  };

  return (
    <div className={`inline-block animate-spin rounded-full border-b-2 border-blue-600 ${sizeClasses[size]}`}></div>
  );
}

// Button Loading State
export function ButtonLoadingState({ text = 'Loading...' }: { text?: string }) {
  return (
    <button 
      disabled 
      className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg opacity-50 cursor-not-allowed"
    >
      <InlineLoading size="sm" />
      {text}
    </button>
  );
}

// Card Loading State
export function CardLoadingState() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-4">
        <Skeleton className="w-12 h-12 rounded-full" />
        <div className="flex-1">
          <Skeleton className="h-4 w-3/4 mb-2" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
    </div>
  );
}

// List Loading State
export function ListLoadingState({ count = 5 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <CardLoadingState key={index} />
      ))}
    </div>
  );
}

// Search Loading State
export function SearchLoadingState() {
  return (
    <div className="relative">
      <Skeleton className="h-12 w-full rounded-lg" />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <Skeleton className="w-6 h-6 rounded-full" />
      </div>
    </div>
  );
}

// Modal Loading State
export function ModalLoadingState() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <LoadingSpinner size="lg" text="Loading..." />
      </div>
    </div>
  );
}

// Table Loading State
export function TableLoadingState({ rows = 5, columns = 4 }: { rows?: number; columns?: number }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <Skeleton className="h-6 w-32" />
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {Array.from({ length: columns }).map((_, index) => (
              <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <Skeleton className="h-4 w-20" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td key={colIndex} className="px-6 py-4">
                  <Skeleton className="h-4 w-full" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 