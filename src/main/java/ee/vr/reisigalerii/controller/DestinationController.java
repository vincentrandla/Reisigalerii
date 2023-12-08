package ee.vr.reisigalerii.controller;


import ee.vr.reisigalerii.model.Destination;
import ee.vr.reisigalerii.repository.DestinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DestinationController {

    @Autowired
    DestinationRepository destinationRepository;

    @GetMapping("destination/{id}")
    public ResponseEntity<Destination> getDestinationById(@PathVariable Long id) {
        return new ResponseEntity<>(destinationRepository.findById(id).orElseThrow(), HttpStatus.OK);
    }

    @PostMapping("destination")
    public ResponseEntity<Destination> createDestination(@RequestBody Destination destination) {
        return new ResponseEntity<>(destinationRepository.save(destination), HttpStatus.OK);
    }

    @PutMapping("destination/{id}")
    public ResponseEntity<List<Destination>> updateDestination(@PathVariable Long id, @RequestBody Destination updatedDestination) {
        destinationRepository.findById(id)
                .map(destination -> {
                    destination.setName(updatedDestination.getName());
                    destination.setDescription(updatedDestination.getDescription());
                    return destinationRepository.save(destination);
                });
        return new ResponseEntity<>(destinationRepository.findAll(), HttpStatus.OK);
    }

    @DeleteMapping("destination/{id}")
    public ResponseEntity<List<Destination>> deleteDestination(@PathVariable Long id) {
        destinationRepository.deleteById(id);
        return new ResponseEntity<>(destinationRepository.findAll(), HttpStatus.OK);
    }
}
