# セットアップ
## 1. dockerのインストール
```
brew install --cask docker
```

## 2. dockerイメージ取得
```
docker pull spine3/firebase-emulator
```

## 3. コンテナ起動

`<your-gcp-project>`にIDを指定してください

```
docker run \
  --rm \
  -p=9000:9000 \
  -p=8080:8080 \
  -p=4000:4000 \
  -p=9099:9099 \
  -p=8085:8085 \
  -p=5001:5001 \
  -p=9199:9199 \
  --env "GCP_PROJECT=<your-gcp-project>" \
  --env "ENABLE_UI=true" \
  spine3/firebase-emulator
```


## 4. Script環境の設定
```
cd firebase_seeder
npm install
```

## 5. Seederデータ投入
```
cd firebase_seeder

# テストユーザーの投入
node scripts/auth_seeder.js

# Firestoreの投入
node scripts/firestore_seeder.js

# Storageの投入
node scripts/storage_seeder.js
```