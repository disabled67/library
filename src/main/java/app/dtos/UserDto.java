package app.dtos;

import app.entities.Role;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Collection;
import java.util.Collections;
import java.util.Optional;

public class UserDto {

    private static final String ROLE = "ROLE_MANAGER";

    public UserDto( @JsonProperty("email") String email,
                    @JsonProperty("password") String password) {
        this.username = email;
        this.password = password;
    }

    public Long id;

    public String username;

    public String password;

    public Boolean enabled ;

    public Role role;

    public Optional<String> getUsername() {
        return Optional.ofNullable(username);
    }

    public Optional<String> getEncodedPassword() {
        return Optional.ofNullable(password).map(p -> new BCryptPasswordEncoder().encode(p));
    }

    public UsernamePasswordAuthenticationToken toAuthenticationToken() {

        return new UsernamePasswordAuthenticationToken(username, password, getAuthorities());
    }

    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singleton(() -> ROLE);
    }

}
