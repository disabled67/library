package app.mappers;

import ma.glasnost.orika.Mapper;
import ma.glasnost.orika.MapperFactory;
import ma.glasnost.orika.impl.ConfigurableMapper;
import ma.glasnost.orika.impl.DefaultMapperFactory;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Configuration;

import java.util.Map;

@Configuration
public class MapperConfig extends ConfigurableMapper implements ApplicationContextAware {

	private MapperFactory factory;

	@Override
	protected void configure(MapperFactory factory) {
		super.configure(factory);
		this.factory = factory;
	}

	@Override
	protected void configureFactoryBuilder(DefaultMapperFactory.Builder factoryBuilder) {
		factoryBuilder.mapNulls(false);
	}

	@Override
	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		registerBeans(applicationContext);
	}

	private void registerBeans(ApplicationContext applicationContext) {
		Map<String, Mapper> mappers = applicationContext.getBeansOfType(Mapper.class);
		mappers.values().forEach(this::addMapper);
	}

	private void addMapper(Mapper<?, ?> mapper) {
		factory.classMap(mapper.getAType(), mapper.getBType())
				.customize((Mapper) mapper)
				.byDefault()
				.register();
	}
}
