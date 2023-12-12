package ee.vr.reisigalerii.repository;

import ee.vr.reisigalerii.model.Destination;
import ee.vr.reisigalerii.model.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HotelRepository extends JpaRepository<Hotel, Long> {

    List<Hotel> findByDestination(Destination destination);
}
