package ee.vr.reisigalerii.dto.hotelDTO;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Setter
@Getter
public class HotelRequest {
    private String name;
    private String location;
    private String description;
    private double rating;
    private BigDecimal basePrice;
    private Long destinationId;
}
