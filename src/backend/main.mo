import Map "mo:core/Map";
import Int "mo:core/Int";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";

actor {
  type VehicleType = {
    #twoWheeler;
    #fourWheeler;
  };

  type Inquiry = {
    id : Nat;
    name : Text;
    phone : Text;
    vehicleType : VehicleType;
    partRequired : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Inquiry {
    public func compare(a : Inquiry, b : Inquiry) : Order.Order {
      Int.compare(b.timestamp, a.timestamp);
    };
  };

  let inquiries = Map.empty<Nat, Inquiry>();
  var nextId = 0;

  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, vehicleType : VehicleType, partRequired : Text, message : Text) : async () {
    let inquiry : Inquiry = {
      id = nextId;
      name;
      phone;
      vehicleType;
      partRequired;
      message;
      timestamp = Time.now();
    };
    inquiries.add(nextId, inquiry);
    nextId += 1;
  };

  public query ({ caller }) func getInquiry(id : Nat) : async Inquiry {
    switch (inquiries.get(id)) {
      case (null) { Runtime.trap("Inquiry does not exist.") };
      case (?inquiry) { inquiry };
    };
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray().sort();
  };
};
