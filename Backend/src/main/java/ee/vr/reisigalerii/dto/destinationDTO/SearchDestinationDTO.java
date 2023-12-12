package ee.vr.reisigalerii.dto.destinationDTO;

import lombok.Data;

@Data
public class SearchDestinationDTO {
    private Long id;
    private String name;

    public SearchDestinationDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }
}
