import { flushSync } from 'react-dom';
import { useNavigate } from 'react-router-dom';

export const AnimateLink = ({ to, children, styles = '' }) => {
    const navigate = useNavigate();

    return (
        <a
            className={styles}
            href={to}
            onClick={(e) => {
                e.preventDefault();
                document.startViewTransition(() => {
                    flushSync(() => {
                        navigate(to);
                    });
                });
            }}
        >
            {children}
        </a>
    );
}
