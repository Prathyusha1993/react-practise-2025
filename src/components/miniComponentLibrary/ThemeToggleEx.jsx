import ReusableButton from "./ReusableButton";

function ThemeToggle() {
    const toggleTheme = () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
    };
    return <ReusableButton label='Toggle Theme' onClick={toggleTheme}/>
}