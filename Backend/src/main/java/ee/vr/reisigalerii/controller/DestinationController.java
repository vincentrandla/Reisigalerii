package ee.vr.reisigalerii.controller;


import ee.vr.reisigalerii.dto.destinationDTO.DestinationWithPriceDTO;
import ee.vr.reisigalerii.model.Destination;
import ee.vr.reisigalerii.repository.DestinationRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
public class DestinationController {

    @Autowired
    DestinationRepository destinationRepository;

    @GetMapping("destination/{id}")   // localhost:8080/destination/1
    public ResponseEntity<DestinationWithPriceDTO> getDestinationById(@PathVariable String id) {
        try {
            Long destinationId = Long.parseLong(id);
            Destination destination = destinationRepository.findById(destinationId)
                    .orElseThrow(() -> new EntityNotFoundException("Destination not found with id: " + destinationId));

            DestinationWithPriceDTO destinationDTO = new DestinationWithPriceDTO(destination.getId(), destination.getName(), destination.getPrice());

            return new ResponseEntity<>(destinationDTO, HttpStatus.OK);
        } catch (NumberFormatException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
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
