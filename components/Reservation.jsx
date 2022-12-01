export default function Home() {
  return (
    <div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
      
      
      <div className="mt-10 w-full sm:mx-auto lg:mx-0">
        <div className="md:grid md:grid-cols-6 gap-1 flex flex-col">
          <div className="rounded-l-lg col-span-2  flex flex-col py-2 items-center bg-rose-200">
            <label
              for="check-in"
              className="py-2 text-sm font-semibold uppercase"
            >
              Check-in
            </label>
            <input id="startDate" type="date" />
          </div>
          <div className="col-span-2 py-2 flex flex-col items-center bg-rose-200">
            <label
              for="check-out"
              className="py-2 text-sm font-semibold uppercase"
            >
              Check-out
            </label>
            <input id="check-out" type="date" />
          </div>
          <div className="col-span-1 py-2 flex flex-col items-center bg-rose-200 overflow-hidden">
            <label
              for="guests"
              className="py-2 text-sm font-semibold uppercase"
            >
              Guests
            </label>
            <input
              id="guests"
              type="number"
              placeholder="Total guests"
              className="text-center"
            />
          </div>
          <div className="col-span-1 bg-active hover:opacity-80 rounded-r-lg">
            <button
              type="submit"
              className="w-full h-full md:py-0 py-4 text-primary font-bold break-words bg-rose-200 rounded-r-lg"
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
