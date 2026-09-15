<?php
// Configuration Manager using PHP Constants

// Define configuration constants
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', 'password123');
define('DB_NAME', 'myapp_db');

define('APP_NAME', 'MyPHPApp');
define('APP_VERSION', '1.0.0');
define('DEBUG_MODE', true);

// Define an array constant for supported languages
define('SUPPORTED_LANGUAGES', ['en' => 'English', 'es' => 'Spanish', 'fr' => 'French']);

// Function to display database configuration
function displayDBConfig() {
    echo "Database Configuration:<br />";
    echo "Host: " . DB_HOST . "<br />";
    echo "User: " . DB_USER . "<br />";
    echo "Database: " . DB_NAME . "<br />";
}

// Function to display app information
function displayAppInfo() {
    echo "App Information:<br />";
    echo "Name: " . APP_NAME . "<br />";
    echo "Version: " . APP_VERSION . "<br />";
    echo "Debug Mode: " . (DEBUG_MODE ? "Enabled" : "Disabled") . "<br />";
}

// Function to display supported languages
function displaySupportedLanguages() {
    echo "Supported Languages:<br />";
    foreach (SUPPORTED_LANGUAGES as $code => $language) {
        echo "$code: $language<br />";
    }
}

// Main execution
echo "PHP Constants - Configuration Manager<br /><br />";

displayDBConfig();
echo "<br />";
displayAppInfo();
echo "<br />";
displaySupportedLanguages();

// Demonstrating case-insensitivity (for PHP versions < 8.0)
echo "<br />Case-insensitivity demonstration:<br />";
echo "APP_NAME: " . APP_NAME . "<br />";
echo "app_name: " . (defined('app_name') ? app_name : "Not accessible") . "<br />";

// Demonstrating constants in a function (global scope)
function testConstantScope() {
    echo "<br />Testing constant scope in function:<br />";
    echo "APP_NAME inside function: " . APP_NAME . "<br />";
}

testConstantScope();

// Error handling demonstration
echo "<br />Error handling demonstration:<br />";
try {
    // Attempt to redefine a constant (this will trigger an error)
    define('APP_NAME', 'NewAppName');
} catch (Error $e) {
    echo "Error: " . $e->getMessage() . "<br />";
}

?>
