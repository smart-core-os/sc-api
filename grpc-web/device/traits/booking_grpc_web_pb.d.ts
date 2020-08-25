import * as grpcWeb from 'grpc-web';

import * as device_traits_booking_pb from '../../device/traits/booking_pb';


export class BookingApiClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listBookings(
    request: device_traits_booking_pb.ListBookingsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_booking_pb.ListBookingsResponse) => void
  ): grpcWeb.ClientReadableStream<device_traits_booking_pb.ListBookingsResponse>;

  checkInBooking(
    request: device_traits_booking_pb.CheckInBookingRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_booking_pb.CheckInBookingResponse) => void
  ): grpcWeb.ClientReadableStream<device_traits_booking_pb.CheckInBookingResponse>;

  checkOutBooking(
    request: device_traits_booking_pb.CheckOutBookingRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_booking_pb.CheckOutBookingResponse) => void
  ): grpcWeb.ClientReadableStream<device_traits_booking_pb.CheckOutBookingResponse>;

  createBooking(
    request: device_traits_booking_pb.CreateBookingRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_booking_pb.CreateBookingResponse) => void
  ): grpcWeb.ClientReadableStream<device_traits_booking_pb.CreateBookingResponse>;

  updateBooking(
    request: device_traits_booking_pb.UpdateBookingRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: device_traits_booking_pb.UpdateBookingResponse) => void
  ): grpcWeb.ClientReadableStream<device_traits_booking_pb.UpdateBookingResponse>;

  pullBookings(
    request: device_traits_booking_pb.ListBookingsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_booking_pb.PullBookingsResponse>;

}

export class BookingApiPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listBookings(
    request: device_traits_booking_pb.ListBookingsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_booking_pb.ListBookingsResponse>;

  checkInBooking(
    request: device_traits_booking_pb.CheckInBookingRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_booking_pb.CheckInBookingResponse>;

  checkOutBooking(
    request: device_traits_booking_pb.CheckOutBookingRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_booking_pb.CheckOutBookingResponse>;

  createBooking(
    request: device_traits_booking_pb.CreateBookingRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_booking_pb.CreateBookingResponse>;

  updateBooking(
    request: device_traits_booking_pb.UpdateBookingRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<device_traits_booking_pb.UpdateBookingResponse>;

  pullBookings(
    request: device_traits_booking_pb.ListBookingsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<device_traits_booking_pb.PullBookingsResponse>;

}

