package ee.vr.reisigalerii.service;

import ee.vr.reisigalerii.model.Destination;
import ee.vr.reisigalerii.repository.DestinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DestinationServiceImpl implements DestinationService{

    @Autowired
    DestinationRepository destinationRepository;

    @Override
    public List<Destination> searchDestinations(String keyword) {
        return destinationRepository.findByNameContainingIgnoreCase(keyword);
    }
}
