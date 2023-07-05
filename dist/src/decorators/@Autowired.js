import { inject } from "inversify";
export default function Autowired(bean) {
    return inject(bean);
}
