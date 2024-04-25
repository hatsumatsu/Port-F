<?php


/**
 * Add ACF option page
 * 
 */
if( function_exists( 'acf_add_options_page' ) ) {
    add_action( 'acf/init', function() {
        acf_add_options_page(
            array(
                'menu_slug' => 'email',
                'page_title' => __( 'Email', 'port-f' ),
                'capability' => 'manage_options',
                'parent_slug' => 'options-general.php',
                'position' => false,
                'icon_url' => false,
                'autoload' => false
            )
        );        
    } );
}



/**
 * Setup PHPMailer
 * 
 */
add_action( 'phpmailer_init', function( $phpmailer ) {
    if( !$phpmailer ) {
        return ;
    }

    $settings = get_field( 'email', 'options' );
    if( !$settings || !is_array( $settings ) ) return;

    $defaults = array(
        'smtp_host' => '',
        'smtp_port' => '',
        'smtp_security' => 'none',
        'smtp_autotls' => false,
        'smtp_user' => '',
        'smtp_password' => '',
        'from' => '',
        'from_name' => '',
    );

    $settings = array_merge( $defaults, $settings );

    if( 
        !$settings['smtp_host'] || 
        !$settings['smtp_port'] || 
        !$settings['smtp_user'] ||
        !$settings['smtp_password'] ||
        !$settings['from']
    ) return;


    $phpmailer->IsSMTP();
    
    $phpmailer->Host = $settings['smtp_host'];
    $phpmailer->Port = $settings['smtp_port']; 

    // 'none'|'ssl'|'tls'
    if( $settings['smtp_security'] && $settings['smtp_security'] !== 'none' ) {
        $phpmailer->SMTPSecure = $settings['smtp_security'];
    }

    $phpmailer->SMTPAutoTLS = $settings['smtp_autotls'];
    
    $phpmailer->SMTPAuth = true;
    $phpmailer->Username = $settings['smtp_user'];
    $phpmailer->Password = $settings['smtp_password'];
    
    $phpmailer->From = $settings['from'];
    $phpmailer->FromName = $settings['from_name'];
    $phpmailer->SetFrom( $settings['from'], $settings['from_name'] );
} );