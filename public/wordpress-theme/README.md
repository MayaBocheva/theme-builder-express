# Shanti Tara WordPress Theme

## How to Convert to WordPress Theme

### Step 1: File Structure
Create a folder called `shanti-tara` with these files:
- `style.css` (this file - already has WordPress theme header)
- `index.php` (rename index.html and add WordPress template tags)
- `functions.php` (for enqueueing scripts/styles)
- `screenshot.png` (1200x900 preview image)

### Step 2: Convert index.html to index.php
1. Rename `index.html` to `index.php`
2. Replace the head section with:
```php
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
```

3. Add before closing `</body>`:
```php
<?php wp_footer(); ?>
```

### Step 3: Create functions.php
```php
<?php
function shanti_tara_enqueue_styles() {
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Lato:wght@300;400;500;600;700&display=swap', array(), null);
    wp_enqueue_style('shanti-tara-style', get_stylesheet_uri(), array('google-fonts'), '1.0');
    wp_enqueue_script('shanti-tara-script', get_template_directory_uri() . '/script.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'shanti_tara_enqueue_styles');

function shanti_tara_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
}
add_action('after_setup_theme', 'shanti_tara_setup');
```

### Step 4: Add Images
Create an `images` folder and add:
- logo.svg
- hero-woman.jpg
- about-image.jpg
- avatar1.jpg, avatar2.jpg, avatar3.jpg

### Step 5: Create Theme ZIP
1. Put all files in the `shanti-tara` folder
2. ZIP the folder
3. Upload via WordPress Admin > Appearance > Themes > Add New > Upload Theme

## Files Included
- `index.html` - Main template (rename to index.php)
- `style.css` - Complete stylesheet with WordPress theme header
- `script.js` - JavaScript for interactivity
- `README.md` - This file

## Customization
All colors and styles use CSS variables in `style.css` for easy customization:
- `--color-cream` - Background cream color
- `--color-burgundy` - Primary accent color
- `--color-mauve` - Secondary accent color
- `--color-brown` - Text color for headings
