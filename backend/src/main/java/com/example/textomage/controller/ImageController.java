package com.example.textomage.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ImageController {

    @PostMapping("/generate-image")
    public ResponseEntity<Map<String, String>> generateImage(@RequestBody Map<String, String> request) {
        String text = request.get("text");
        // Simulate image generation
        String imageUrl = "http://example.com/generated-image.png"; // Placeholder URL

        Map<String, String> response = new HashMap<>();
        response.put("imageUrl", imageUrl);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
