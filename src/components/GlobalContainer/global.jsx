import css from './global.module.css';

const Container = ({children}) => (
    <div className={css.container}>
        {children}
    </div>
);

export default Container;