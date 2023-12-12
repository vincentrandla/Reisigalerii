package ee.vr.reisigalerii.controller;


import ee.vr.reisigalerii.model.Destination;
import ee.vr.reisigalerii.model.Hotel;
import ee.vr.reisigalerii.dto.hotelDTO.HotelRequest;
import ee.vr.reisigalerii.repository.DestinationRepository;
import ee.vr.reisigalerii.repository.HotelRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
public class HotelController {

    @Autowired
    HotelRepository hotelRepository;

    @Autowired
    DestinationRepository destinationRepository;

    @GetMapping("hotel/{id}")
    public ResponseEntity<Hotel> getHotelsById(@PathVariable Long id) {
        return new ResponseEntity<>(hotelRepository.findById(id).orElseThrow(), HttpStatus.OK);
    }

    @GetMapping("hotels")
    public ResponseEntity<List<Hotel>> getHotelsByDestination(@RequestParam Long destinationId) {
        Destination destination = destinationRepository.findById(destinationId)
                .orElseThrow(() -> new EntityNotFoundException("Destination not found with id: " + destinationId));
        List<Hotel> hotels = hotelRepository.findByDestination(destination);
        return new ResponseEntity<>(hotels, HttpStatus.OK);
    }

    @PostMapping("hotel")
    public ResponseEntity<Hotel> createHotel(@RequestBody HotelRequest hotelRequest) {
        Destination destination = destinationRepository.findById(hotelRequest.getDestinationId())
                .orElseThrow(() -> new EntityNotFoundException("Destination not found with id: " + hotelRequest.getDestinationId()));

        Hotel hotel = new Hotel();
        hotel.setName(hotelRequest.getName());
        hotel.setLocation(hotelRequest.getLocation());
        hotel.setDescription(hotelRequest.getDescription());
        hotel.setRating(hotelRequest.getRating());
        hotel.setBasePrice(hotelRequest.getBasePrice());
        hotel.setDestination(destination);

        return new ResponseEntity<>(hotelRepository.save(hotel), HttpStatus.OK);
    }


    @PutMapping("hotel/{id}")
    public ResponseEntity<List<Hotel>> updateHotel(@PathVariable Long id, @RequestBody Hotel updatedHotel) {
        hotelRepository.findById(id)
                .map(hotel -> {
                    hotel.setName(updatedHotel.getName());
                    hotel.setDescription(updatedHotel.getDescription());
                    hotel.setRating(updatedHotel.getRating());
                    hotel.setBasePrice(updatedHotel.getBasePrice());
                    return hotelRepository.save(hotel);
                });
        return new ResponseEntity<>(hotelRepository.findAll(), HttpStatus.OK);
    }

    @DeleteMapping("hotel/{id}")
    public ResponseEntity<List<Hotel>> deleteHotel(@PathVariable Long id) {
        hotelRepository.deleteById(id);
        return new ResponseEntity<>(hotelRepository.findAll(), HttpStatus.OK);
    }
}
