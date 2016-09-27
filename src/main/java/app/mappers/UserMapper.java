package app.mappers;

import app.dtos.UserDto;
import app.entities.User;
import ma.glasnost.orika.CustomMapper;
import ma.glasnost.orika.MappingContext;
import org.springframework.stereotype.Component;


@Component
public class UserMapper extends CustomMapper<User, UserDto> {

    @Override
    public void mapAtoB(User user, UserDto dto, MappingContext context) {
        dto.id = user.getId();
        dto.username = user.getUsername();
        dto.password = user.getPassword();
        dto.enabled = user.getEnabled();
        dto.role = user.getRole();
    }


}
