package ee.vr.reisigalerii.repository;

import ee.vr.reisigalerii.model.Destination;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DestinationRepository extends JpaRepository<Destination, Long> {

    List<Destination> findByNameContainingIgnoreCase(String keyword);
}
