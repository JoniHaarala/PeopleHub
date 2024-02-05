const PageWrapper = (Component, idName) =>
    function HOC() {
        return (
            <div id={idName}>
                <Component />
            </div>
        );
    }
    
export default PageWrapper