/**
 * Created by rongzhx on 2017/7/12 0012.
 */
import g from '../../global'
import template from './index.html'

// 导出类
export default class {
    mount(container) {
        container.innerHTML = template;
        container.querySelector('gotoBar').addEventListener('click', () => {
            // 调到bar页面
            g.router.go('/bar');
        });
    }
}