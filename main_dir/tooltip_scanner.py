from selenium.webdriver.common.action_chains import ActionChains
import time

def scan_tooltips(driver, seen_tooltips, tooltip_data, step_size=100):
    """
    Scans the tooltips on the webpage and collects county name and price.

    Parameters:
    - driver: Selenium WebDriver instance.
    - seen_tooltips: Set of already seen tooltips to avoid duplicates.
    - tooltip_data: List to store collected tooltip data.
    - step_size: Step size for mouse scanning in pixels.
    """
    actions = ActionChains(driver)
    window_width = driver.execute_script("return window.innerWidth")
    window_height = driver.execute_script("return window.innerHeight")

    for y in range(0, window_height, step_size):
        for x in range(0, window_width, step_size):
            try:
                driver.execute_script(f"window.scrollTo({x}, {y})")
                time.sleep(0.5)

                elements = driver.find_elements("css selector", ".fm-tooltip")
                for element in elements:
                    try:
                        actions.move_to_element(element).perform()
                        time.sleep(1)

                        tooltip_name = driver.find_element("css selector", ".fm-tooltip-name").text
                        tooltip_price = driver.find_element("css selector", ".fm-tooltip-comment").text

                        tooltip_entry = (tooltip_name, tooltip_price)

                        if tooltip_entry not in seen_tooltips:
                            seen_tooltips.add(tooltip_entry)
                            tooltip_data.append({"County": tooltip_name + " County", "Price": tooltip_price})
                            print(f"Collected data: County: {tooltip_name}, Price: {tooltip_price}")

                    except Exception:
                        pass
            except Exception as e:
                print(f"Error at ({x}, {y}): {e}")
