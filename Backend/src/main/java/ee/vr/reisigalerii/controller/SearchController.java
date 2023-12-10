package ee.vr.reisigalerii.controller;

import ee.vr.reisigalerii.dto.DestinationDTO;
import ee.vr.reisigalerii.model.Destination;
import ee.vr.reisigalerii.service.DestinationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin("http://localhost:3000")
@RestController
public class SearchController {

    @Autowired
    DestinationService destinationService;

    @GetMapping("destinations")
    public ResponseEntity<List<Destination>> searchDestinations(@RequestParam("keyword") String keyword) {
        List<Destination> results = destinationService.searchDestinations(keyword);
        List<DestinationDTO> dtos = results.stream()
                .map(destination -> new DestinationDTO(destination.getId(), destination.getName()))
                .toList();
        return new ResponseEntity<>(results, HttpStatus.OK);
    }
}
