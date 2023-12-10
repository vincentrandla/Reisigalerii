package ee.vr.reisigalerii.dto;

import lombok.Data;

@Data
public class DestinationDTO {
    private Long id;
    private String name;

    public DestinationDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }
}
