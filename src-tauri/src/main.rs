// // Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::Manager;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn show_window(handle: tauri::AppHandle, label: &str) {
    handle.get_window(label).unwrap().show().unwrap();
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let main = app.get_window("main").unwrap();
            let lottery = app.get_window("lottery").unwrap();

            // lottery.hide().unwrap();

            #[cfg(debug_assertions)]
            {
                main.open_devtools();
                lottery.open_devtools();
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![show_window])
        // .system_tray(create_tray())
        // .on_system_tray_event(handle_system_tray_event)
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
