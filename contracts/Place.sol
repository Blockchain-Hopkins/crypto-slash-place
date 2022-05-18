// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Place {
    // Contract state variables
    uint256 width;
    uint256 height;
    uint256 num_colors;
    Pixel[][] grid;

    // A struct to represent a pixel
    struct Pixel {
        uint256 color;
        address payable owner;
    }

    // A struct for user stats
    struct Stats {
        uint256 numPixelsPlaced;
    }

    // User statistics mapping
    mapping (address => Stats) public stats;
    // @dev: update individual attributes in struct with stats[address].attribute

    // Constructor
    constructor(uint256 _width, uint256 _height, uint256 _num_colors) {
        width = _width;
        height = _height;
        num_colors = _num_colors;
        Pixel[][] memory pixels = new Pixel[][](width); // This creates 2D array in memory of length width and height any
        for (uint256 i = 0; i < width; i++) {
            for (uint256 j = 0; j < height; j++) {
                grid[i][j] = Pixel(0, payable(0));
            }
        }
        grid = pixels;
    }
}