/*export default function Reservation() {
  return (
    <form action = "/api/reservation" method ="POST"> 
    <div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
      
      
      <div className="mt-10 w-full sm:mx-auto lg:mx-0">
        <div className="md:grid md:grid-cols-6 gap-1 flex flex-col">
          <div className="rounded-l-lg col-span-2  flex flex-col py-2 items-center bg-rose-200">
            <label
              forHtml="start_date"
              className="py-2 text-sm font-semibold uppercase"
            >
              Start date
            </label>
            <input id="start_date" type="date" />
          </div>
          <div className="col-span-2 py-2 flex flex-col items-center bg-rose-200">
            <label
              forHtml="end_date"
              className="py-2 text-sm font-semibold uppercase"
            >
              End date
            </label>
            <input id="end_date" type="date" />
          </div>
          <div className="col-span-1 py-2 flex flex-col items-center bg-rose-200 overflow-hidden">
            <label
              forHtml="users"
              className="py-2 text-sm font-semibold uppercase"
            >
             Guests
            </label>
            <input
              id="users"
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
  }*/
  import roomController from "../controllers/roomController"
  const Reservation = props => {
    const room = props.room
    return (
      <>
      <h1>We are the {room.room_type}</h1>
      <h3>Book your 🚀</h3>
      <form action="/api/reservation" method="POST">
        <input hidden name="room_id" value={room.room_id}/>
        <label htmlFor="start_date">Start Date</label>
        <input type='date' id="start_date" name="start_date" />
        <label htmlFor="end_date">End Date</label>
        <input type='date' id="end_date" name="end_date" />
        <input type="submit" value="Reserve"/>
      </form>
      </>
    )
  }
  export async function getServerSideProps(req, res) {
    const room = await roomController.find(req.query.id)
    return {
      props: {room}
    }
  }
  
  
export default Reservation