package ee.vr.reisigalerii.service;

import ee.vr.reisigalerii.model.Hotel;
import ee.vr.reisigalerii.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HotelService {

    @Autowired
    HotelRepository hotelRepository;

    @Autowired
    DestinationService destinationService;
}
