import { router, get } from 'noname';

@router({
    path: '/jose'
})
export class PocRouter {

    @get('/')
    hi(ctx){
        ctx.body = 'Hi jose';
    }
}
