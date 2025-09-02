-- CreateTable
CREATE TABLE "flights" (
    "id" SERIAL NOT NULL,
    "airline" TEXT,
    "airlineLogo" TEXT,
    "origin" TEXT,
    "destination" TEXT,
    "originAirport" TEXT,
    "destinationAirport" TEXT,
    "departureDate" TIMESTAMP(3),
    "departureTime" TIMESTAMP(3),
    "departureTimeRange" TEXT,
    "arrivalTime" TIMESTAMP(3),
    "arrivalDate" TIMESTAMP(3),
    "price" DECIMAL(10,2),
    "stops" INTEGER,
    "duration" INTEGER,
    "boardingTime" TIMESTAMP(3),
    "flightNumber" TEXT,
    "cabinClass" TEXT,

    CONSTRAINT "flights_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookings" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "flight_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT DEFAULT 'pending',

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "flight_id" ON "bookings"("flight_id");

-- CreateIndex
CREATE INDEX "user_id" ON "bookings"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_unique" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "admin_email_unique" ON "admin"("email");

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_ibfk_1" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_ibfk_2" FOREIGN KEY ("flight_id") REFERENCES "flights"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
