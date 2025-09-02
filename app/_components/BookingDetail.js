import { MoveRight } from "lucide-react";
import Image from "next/image";
import { formatDateLong, formatTime } from "../_lib/utility";

export default function BookingDetail({ flight, name }) {
  const {
    airlineLogo,
    airline,
    origin,
    destination,
    originAirport,
    destinationAirport,
    departureDate,
    departureTime,
    arrivalTime,
    boardingTime,
    flightNumber,
    cabinClass,
  } = flight;
  return (
    <div className="max-w-[500px] mx-auto p-4">
      <div className="">
        <div className="flex items-center justify-between mb-5 ">
          <div className="flex items-center ">
            <h4 className="h4 text-brand-dark">{airline}</h4>
            <Image
              src={`/${airlineLogo}`}
              width={35}
              height={35}
              alt={airline}
              className="object-cover"
            />
          </div>
          <span className="text-brand-dark">
            {formatDateLong(departureDate)}
          </span>
        </div>
        <div className="space-y-4">
          <div className="px-4 ">
            <span className="text-fg-muted">Passenger</span>
            <h3 className="h3">{name}</h3>
          </div>
          <div className="px-4 flex items-center justify-between">
            <div className=" w-[120px]">
              <span className="text-fg-muted">Boarding</span>
              <h3 className="h3">{formatTime(boardingTime)}</h3>
            </div>
            <div className="w-[120px]">
              <span className="text-fg-muted">Flight</span>
              <h3 className="h3">{flightNumber} </h3>
            </div>
          </div>
          <div className="px-4 flex items-center justify-between">
            <div className=" w-[120px]">
              <span className="text-fg-muted">Depature</span>
              <h3 className="h3 -mb-2">{formatTime(departureTime)}</h3>
              <span className="text-fg-muted text-small">
                {originAirport.split(" ").at(0)}
              </span>
            </div>
            <div className=" w-[120px]">
              <span className="text-fg-muted">Arrival</span>
              <h3 className="h3 -mb-2">{formatTime(arrivalTime)}</h3>
              <span className="text-fg-muted text-small">
                {destinationAirport.split(" ").at(0)}
              </span>
            </div>
          </div>
          <h3 className="h3 px-4 flex justify-between items-center">
            {origin} <MoveRight /> {destination}
          </h3>
          <span className="text-fg text-default font-semibold px-4">
            {cabinClass} Class
          </span>
        </div>
      </div>
    </div>
  );
}
