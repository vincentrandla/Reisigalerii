package ee.vr.reisigalerii.repository;

import ee.vr.reisigalerii.model.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HotelRepository extends JpaRepository<Hotel, Long> {
}
