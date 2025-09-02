export default function Spinner() {
  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand"></div>
      <h4 className="h4 text-fg">Flights are loading...</h4>
    </div>
  );
}
