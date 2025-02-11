import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import TareasLista from './TareasLista';
import Tarea from './Tarea';

beforeAll(() => {
  configure({ adapter: new Adapter() });
});

test('TareasLista manda el prop "tarea" a Tarea | Asegúrate de que TareasLista mande un prop "tarea" al componenete Tarea', () => {
  const wrapper = shallow(<TareasLista tareas={['']} />);
  expect(wrapper.find(Tarea).prop('tarea')).toBeDefined();
});

test('TareasLista renderiza componentes Tarea en base a prop "tareas" | Asegúrate de que TareasLista reciba un prop "tareas" de tipo array y renderice un componenete Tarea por cada elemento presente', () => {
  const wrapper = shallow(<TareasLista tareas={['', '', '']} />);
  expect(wrapper.find(Tarea).length).toBe(3);
});
