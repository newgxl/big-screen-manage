import {
  Dialog, //弹框
  Carousel, //轮播图
  CarouselItem,
  Row,
  Col,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  // Radio,
  // RadioGroup,
  // RadioButton,
  // Checkbox,
  // CheckboxButton,
  // CheckboxGroup,
  // Switch,
  Select,
  Option,
  // OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  Popover,
  Tooltip,
  Form,
  FormItem,
  // Alert,
  // Slider,
  Icon,
  Card,
  Image,
  // PageHeader,
  // CascaderPanel,
  Loading,
  Message,
  Avatar
} from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
const components = [
  Dialog, //弹框
  Carousel, //轮播图
  CarouselItem,
  Row,
  Col,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  // Radio,
  // RadioGroup,
  // RadioButton,
  // Checkbox,
  // CheckboxButton,
  // CheckboxGroup,
  // Switch,
  Select,
  Option,
  // OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  Popover,
  Tooltip,
  Form,
  FormItem,
  // Alert,
  // Slider,
  Icon,
  Card,
  Image,
  // PageHeader,
  // CascaderPanel,
  Loading,
  Message,
  Avatar
]
export default function (app) {
  components.forEach((component) => {
    app.use(component)
    if (component == Message) {
      app.prototype.$message = component
    }
  })
}