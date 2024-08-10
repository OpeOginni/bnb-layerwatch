export default function LayerSelector() {
  return (
    <div className="flex gap-2 items-center mb-6">
      <div className="flex items-center space-x-2">
        <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3 text-xs rounded-2xl">
          opBNB
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <button className="bg-opBNB inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-light-accent text-light-accent-foreground shadow-sm hover:bg-light-accent/80 h-8 px-3 text-xs rounded-2xl">
          opBNB
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <button className=" bg-combo inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-light-accent text-light-accent-foreground shadow-sm hover:bg-light-accent/80 h-8 px-3 text-xs rounded-2xl">
          combo
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <button className=" bg-xterio inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-light-accent text-light-accent-foreground shadow-sm hover:bg-light-accent/80 h-8 px-3 text-xs rounded-2xl">
          xterio
        </button>
      </div>
    </div>
  );
}
