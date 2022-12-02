export default function Reservation({ room_id }) {
  return (
    <form action={`/api/reservation/${room_id}`} method="POST">
      <div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
        <div className="mt-10 w-full sm:mx-auto lg:mx-0">
          <div className="md:grid md:grid-cols-6 gap-1 flex flex-col">
            <div className="rounded-l-lg col-span-2  flex flex-col py-2 items-center bg-rose-200">
              <label
                htmlFor="start_date"
                className="py-2 text-sm font-semibold uppercase"
              >
                Start Date
              </label>
              <input id="start_date" type="date" name="start_date" />
            </div>
            <div className="col-span-2 py-2 flex flex-col items-center bg-rose-200">
              <label
                htmlFor="end_date"
                className="py-2 text-sm font-semibold uppercase"
              >
                End Date
              </label>
              <input id="end_date" type="date" name="end_date" />
            </div>
            <div className="col-span-1 py-2 flex flex-col items-center bg-rose-200 overflow-hidden">
              <label
                htmlFor="users"
                className="py-2 text-sm font-semibold uppercase"
              >
                Guests
              </label>
              <input
                id="users"
                name="users"
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
    </form>
  );
}
