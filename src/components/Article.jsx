import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { useLocation } from 'react-router-dom';

const defaultImage = './public/1.jpg'; // Path to your default image

const Article = () => {
  const { state } = useLocation();
  const article = state?.article;

  if (!article) {
    return <Typography variant="h6">No article found</Typography>;
  }

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          height="400"
          image={article.urlToImage || defaultImage} // Use default image if urlToImage is missing
          alt={article.title}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {article.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {article.content || 'No content available.'}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Source: {article.source?.name || 'Unknown'}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Published at: {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : 'Unknown'}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {article.author ? `Author: ${article.author}` : 'Author: Unknown'}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {article.url && <a href={article.url} target="_blank" rel="noopener noreferrer">Read full article</a>}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Article;
