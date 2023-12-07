package ee.vr.reisigalerii.controller;


import ee.vr.reisigalerii.model.Hotel;
import ee.vr.reisigalerii.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HotelController {

    @Autowired
    HotelRepository hotelRepository;

    @GetMapping("hotel/{id}")
    public ResponseEntity<Hotel> getHotelsById(@PathVariable Long id) {
        return new ResponseEntity<>(hotelRepository.findById(id).orElseThrow(), HttpStatus.OK);
    }

    @PostMapping("hotel")
    public ResponseEntity<Hotel> createHotel(@RequestBody Hotel hotel) {
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
}
