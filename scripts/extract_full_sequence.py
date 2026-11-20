import cv2
import os
from PIL import Image

video_path = r'C:\Users\muham\Downloads\1116\1116.mp4'
output_dir = os.path.abspath('public/images/optimized')
os.makedirs(output_dir, exist_ok=True)

cap = cv2.VideoCapture(video_path)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
print(f"Total video frames: {total_frames}")

TARGET_COUNT = 120
indices = [int(i * (total_frames - 1) / (TARGET_COUNT - 1)) for i in range(TARGET_COUNT)]

print(f"Extracting {TARGET_COUNT} frames...")

for i, fidx in enumerate(indices):
    cap.set(cv2.CAP_PROP_POS_FRAMES, fidx)
    ret, frame = cap.read()
    if not ret:
        print(f"Warning: could not read frame {fidx}")
        continue
    
    # Resize to 1920x1080 for web performance
    resized = cv2.resize(frame, (1920, 1080), interpolation=cv2.INTER_AREA)
    
    # Convert BGR to RGB
    rgb = cv2.cvtColor(resized, cv2.COLOR_BGR2RGB)
    pil_img = Image.fromarray(rgb)
    
    # Save as high-quality WebP
    out_filename = f"frame_{i:03d}.webp"
    out_path = os.path.join(output_dir, out_filename)
    pil_img.save(out_path, format="WEBP", quality=82)
    
    if (i + 1) % 20 == 0 or i == TARGET_COUNT - 1:
        print(f"Saved {i + 1}/{TARGET_COUNT} frames")

cap.release()
print("All frames extracted and optimized successfully!")

