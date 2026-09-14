<?php
define('STDIN', fopen('php://stdin', 'rb'));

// Shopping Cart Calculator


// Function to calculate total price for a product
function calculateProductTotal($price, $quantity) {
    return $price * $quantity;
}

// Function to apply discount
function applyDiscount($total, $discountThreshold, $discountRate) {
    if ($total > $discountThreshold) {
        return $total * (1 - $discountRate);
    }
    return $total;
}

// Product prices
$products = [
    'apple' => ['price' => 0.5, 'quantity' => 0],
    'banana' => ['price' => 0.3, 'quantity' => 0],
    'orange' => ['price' => 0.6, 'quantity' => 0]
];

// Shopping cart
$cart = [];

// Discount settings
$discountThreshold = 10;
$discountRate = 0.1; // 10% discount

// Main program
echo "Welcome to the PHP Shopping Cart Calculator!<br />";

foreach ($products as $name => $details) {
    echo "Enter quantity for $name (price: $" . number_format($details['price'], 2) . "): <br />";
    $quantity = intval(trim(fgets(STDIN)));
    $products[$name]['quantity'] = $quantity;
    $cart[$name] = calculateProductTotal($details['price'], $quantity);
}

// Calculate grand total
$grandTotal = array_sum($cart);

// Apply discount
$finalTotal = applyDiscount($grandTotal, $discountThreshold, $discountRate);

// Display results
echo "<br />Shopping Cart Summary:<br />";
foreach ($cart as $name => $total) {
    echo "$name: $" . number_format($total, 2) . " (" . $products[$name]['quantity'] . " @ $" . number_format($products[$name]['price'], 2) . " each)<br />";
}

echo "\nSubtotal: $" . number_format($grandTotal, 2);
if ($finalTotal < $grandTotal) {
    echo "\nDiscount applied: $" . number_format($grandTotal - $finalTotal, 2);
}
echo "<br />Total Price: $" . number_format($finalTotal, 2);

// Math functions demonstration
echo "<br /><br />Math Functions Demonstration:";
echo "<br />PI value: " . pi();
echo "<br />Minimum price: $" . number_format(min(array_column($products, 'price')), 2);
echo "<br />Maximum price: $" . number_format(max(array_column($products, 'price')), 2);
echo "<br />Rounded total: $" . round($finalTotal, 1);
echo "<br />Random number between 1 and 10: " . rand(1, 10);
?>
