// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorCommunityScreenBrightness",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CapacitorCommunityScreenBrightness",
            targets: ["ScreenBrightnessPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "ScreenBrightnessPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/ScreenBrightnessPlugin"),
        .testTarget(
            name: "ScreenBrightnessPluginTests",
            dependencies: ["ScreenBrightnessPlugin"],
            path: "ios/Tests/ScreenBrightnessPluginTests")
    ]
)
