export default function Spinner() {
  return (
    <div className="min-h-[50vh] flex justify-center items-center gap-2">
      <div className="loader"></div>
      <h4 className="h4 text-fg">Flights are loading . . .</h4>
    </div>
  );
}
