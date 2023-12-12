package ee.vr.reisigalerii.dto.destinationDTO;

import lombok.Data;

@Data
public class DestinationWithPriceDTO {
    private Long id;
    private String name;
    private int price;

    public DestinationWithPriceDTO(Long id, String name, int price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
