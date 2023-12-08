package ee.vr.reisigalerii.service;

import ee.vr.reisigalerii.model.Destination;

import java.util.List;

public interface DestinationService {
    List<Destination> searchDestinations(String keyword);
}
